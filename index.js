function winkTitle(pageTitle, newTitle) {
    return (
        document.title == pageTitle 
        ? document.title = newTitle 
        : document.title = pageTitle
        );
  }
  
  setInterval("winkTitle('Titre', '(4) Notifications | Titre')", 1450);