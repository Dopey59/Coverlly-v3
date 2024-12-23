import React from "react";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="yourAppCookieConsent"
      style={{ background: "#2B373B", color: "#FFF" }}
      buttonStyle={{ backgroundColor: "#4CAF50", color: "#FFF", fontSize: "14px" }}
      declineButtonStyle={{ backgroundColor: "#f44336", color: "#FFF", fontSize: "14px" }}
      expires={365}  // Number of days before the cookie expires
      onAccept={() => {
        // Add functionality when user accepts cookies
        console.log("Cookies accepted");
      }}
      onDecline={() => {
        // Add functionality when user declines cookies
        console.log("Cookies declined");
      }}
    >
      Vous aimez les cookies ? Notre site en utilise afin d&apos;améliorer votre expérience utilisateur. En utilisant notre site, vous approuvez l&apos;utilisation de cookie. 
      En savoir plus <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>.
    </CookieConsent>
  );
};

export default CookieConsentBanner;