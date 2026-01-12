import os
import smtplib
from email.message import EmailMessage
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS

# Környezeti változók betöltése a .env fájlból
load_dotenv()

app = Flask(__name__)
# A CORS beállítása: Ez szükséges ahhoz, hogy a React frontend (pl. 3000-es porton) 
# kommunikálhasson a Python backenddel (5000-es porton).
CORS(app) 

# Globális változók a .env-ből
SENDER_EMAIL = os.getenv('SENDER_EMAIL')
SENDER_PASSWORD = os.getenv('SENDER_PASSWORD')
RECIPIENT_EMAIL = os.getenv('RECIPIENT_EMAIL')
SMTP_SERVER = os.getenv('SMTP_SERVER')
SMTP_PORT = int(os.getenv('SMTP_PORT', 587)) # Alapértelmezett port 587, ha hiányzik

# A szerver elindítása előtt ellenőrizzük a szükséges változókat
if not all([SENDER_EMAIL, SENDER_PASSWORD, RECIPIENT_EMAIL, SMTP_SERVER]):
    print("FATAL ERROR: A környezeti változók (SENDER_EMAIL, SENDER_PASSWORD, RECIPIENT_EMAIL, SMTP_SERVER) hiányoznak a .env fájlból!")
    # Megakadályozza a Flask elindulását, ha a beállítások hiányosak
    # raise EnvironmentError("A .env fájlban hiányzó vagy hibás beállítások!")
    pass # Csak figyelmeztetés, hogy a kód tesztelhető legyen, de éles környezetben ez raise-t dobna.

@app.route('/api/send-email', methods=['POST'])
def send_email():
    """E-mail küldése a frontendtől kapott adatok alapján."""
    
    # 1. Adatok fogadása
    try:
        data = request.get_json()
        name = data.get('name')
        sender_email = data.get('email') # A válasz email címe, nem a küldő fiókunk címe
        subject = data.get('subject') or "Weboldali Ajánlatkérés" # Alapértelmezett tárgy
        body = data.get('body')
        
        # Alapvető validáció
        if not name or not sender_email or not body:
            return jsonify({'error': 'Hiányzó mezők: név, e-mail cím vagy üzenet.'}), 400

    except Exception as e:
        # Hibás JSON formátum
        print(f"Hiba az adatok fogadásakor: {e}")
        return jsonify({'error': 'Hibás adatformátum (JSON) a kérésben.'}), 400
    
    # 2. E-mail üzenet összeállítása
    msg = EmailMessage()
    
    # A tárgy tartalmazza a nevet és a megadott tárgyat is
    full_subject = f"ÚJ KAPCSOLATI ÜZENET: {name} - {subject}"
    
    # Az e-mail törzse
    email_body = f"""
    Új üzenet érkezett a weboldal Kapcsolati űrlapján keresztül.

    Küldő neve: {name}
    Küldő E-mail címe: {sender_email}

    --------------------------------------------------
    Tárgy: {subject}
    --------------------------------------------------
    Üzenet:
    {body}
    --------------------------------------------------
    """
    
    msg.set_content(email_body)
    msg['Subject'] = full_subject
    msg['From'] = SENDER_EMAIL
    msg['To'] = RECIPIENT_EMAIL
    # FONTOS: Beállítjuk a Reply-To mezőt, hogy a címzett (Ön) közvetlenül a küldőnek tudjon válaszolni.
    msg['Reply-To'] = sender_email 
    
    # 3. E-mail küldése SMTP-n keresztül
    try:
        print(f"SMTP csatlakozás: {SMTP_SERVER}:{SMTP_PORT} a {SENDER_EMAIL} fiókkal...")
        # Létrehozza a biztonságos kapcsolatot (TLS/STARTTLS)
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls() 
            # Hitelesítés
            server.login(SENDER_EMAIL, SENDER_PASSWORD) 
            # E-mail küldése
            server.send_message(msg) 
        
        print(f"Sikeresen elküldve a(z) {sender_email} címről a(z) {RECIPIENT_EMAIL} címre.")
        return jsonify({'message': 'Üzenet sikeresen elküldve! Köszönjük a megkeresést.'}), 200

    except smtplib.SMTPAuthenticationError:
        # A leggyakoribb hiba: helytelen jelszó vagy beállítás
        error_msg = "SMTP Hitelesítési hiba: Helytelen felhasználónév/jelszó, vagy a Gmail blokkolja a hozzáférést. Kérjük, ellenőrizze, hogy ALKALMAZÁSSPECIFIKUS JELSZÓT használ-e, és a 2FA engedélyezve van-e!"
        print(f"FATAL ERROR: {error_msg}")
        return jsonify({'error': error_msg}), 500
        
    except Exception as e:
        # Minden más hiba (pl. hálózati, szerver nem érhető el)
        error_msg = f"Szerveroldali hiba az e-mail küldése során: {type(e).__name__}: {str(e)}"
        print(f"FATAL ERROR: {error_msg}")
        return jsonify({'error': error_msg}), 500

if __name__ == '__main__':
    # Helyi teszteléshez, a böngészőből elérhető lesz: http://127.0.0.1:5000/
    app.run(debug=True, port=5000)