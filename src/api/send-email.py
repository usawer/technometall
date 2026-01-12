import os
import smtplib
import json
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# A Vercel/Serverless környezetben a handler függvény kezeli a bejövő kérést.
def handler(request):
    """
    Vercel Serverless Function, amely kezeli a POST kérést az e-mail küldéséhez.
    A Vercel automatikusan kitölti a környezeti változókat (secrets).
    """
    
    # Környezeti változók (titkosítva a Vercel-ben)
    SENDER_EMAIL = os.environ.get("SENDER_EMAIL")
    SENDER_PASSWORD = os.environ.get("SENDER_PASSWORD")
    RECIPIENT_EMAIL = os.environ.get("RECIPIENT_EMAIL")
    SMTP_SERVER = os.environ.get("SMTP_SERVER")
    SMTP_PORT = os.environ.get("SMTP_PORT")

    # Alapvető ellenőrzés
    if request.method != 'POST':
        return {
            'statusCode': 405,
            'body': json.dumps({'error': 'Csak POST kérések engedélyezettek.'}),
            'headers': {'Content-Type': 'application/json'}
        }

    try:
        # A JSON adatok beolvasása a kérés törzséből
        data = json.loads(request.body)
        
        name = data.get('name')
        email = data.get('email')
        subject = data.get('subject')
        body = data.get('body')

        # Kötelező mezők ellenőrzése
        if not all([name, email, subject, body]):
            return {
                'statusCode': 400,
                'body': json.dumps({'error': 'Hiányzó adatok: minden mező kitöltése kötelező.'}),
                'headers': {'Content-Type': 'application/json'}
            }
            
        # --- E-mail küldési logika ---
        
        if not all([SENDER_EMAIL, SENDER_PASSWORD, RECIPIENT_EMAIL, SMTP_SERVER, SMTP_PORT]):
            return {
                'statusCode': 500,
                'body': json.dumps({'error': 'Szerver konfigurációs hiba: hiányzó e-mail környezeti változók.'}),
                'headers': {'Content-Type': 'application/json'}
            }
            
        msg = MIMEMultipart()
        msg['From'] = f"{name} <{SENDER_EMAIL}>"
        msg['To'] = RECIPIENT_EMAIL
        msg['Subject'] = f"Weboldal Ajánlatkérés ({subject})"
        
        full_body = f"""
        Új üzenet érkezett a weboldalon keresztül.

        Tárgy: {subject}
        Küldő neve: {name}
        Visszajelzési e-mail: {email}

        --- ÜZENET TARTALMA ---
        {body}
        """
        msg.attach(MIMEText(full_body, 'plain', 'utf-8'))

        server = smtplib.SMTP(SMTP_SERVER, int(SMTP_PORT))
        server.starttls()
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.sendmail(SENDER_EMAIL, RECIPIENT_EMAIL, msg.as_string())
        server.quit()

        print(f"Sikeresen elküldve a(z) {email} címről a(z) {RECIPIENT_EMAIL} címre. Tárgy: {subject}")
        
        # Sikeres válasz küldése
        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'E-mail sikeresen elküldve!'}),
            'headers': {'Content-Type': 'application/json'}
        }

    except smtplib.SMTPAuthenticationError:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'SMTP hitelesítési hiba. Ellenőrizze a jelszót és a beállításokat.'}),
            'headers': {'Content-Type': 'application/json'}
        }
    except Exception as e:
        print(f"HIBA a Serverless Funkcióban: {e}")
        return {
            'statusCode': 500,
            'body': json.dumps({'error': f'Szerveroldali hiba: {str(e)}'}),
            'headers': {'Content-Type': 'application/json'}
        }