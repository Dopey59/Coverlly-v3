export const copyToClipboard = async (text) => {
    if (!navigator.clipboard) {
      console.error("L'API Clipboard n'est pas disponible.");
      return false;
    }
  
    try {
      await navigator.clipboard.writeText(text);
      console.log("Texte copié dans le presse-papiers !");
      return true;
    } catch (err) {
      console.error("Erreur lors de la copie dans le presse-papiers : ", err);
      return false;
    }
  };  