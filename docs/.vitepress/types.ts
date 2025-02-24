
export namespace Fabric {
    export interface AuthorsOptions {
        /**
         * @default "Página de autores"
         */
        heading: string;
    
        /**
         * @default "%s (no en GitHub)"
         */
        noGitHub: string;
    }

  export interface NotFoundOptions {
    /**
     * @default '404'
     */
    code: string;

    /**
     * The locale's code on Crowdin
     */
    crowdinCode: string | null;

    /**
     * Set aria label for Crowdin link.
     *
     * @default "Abir Crowdin editor"
     */
    crowdinLinkLabel: string;

    /**
     * Set custom Crowdin link text.
     *
     * @default "Ubicado en Crowdin"
     */
    crowdinLinkText: string;

    /**
     * Set aria label for English link.
     *
     * @default "Open the English version"
     */
    englishLinkLabel: string;

    /**
     * Set custom English link text.
     *
     * @default "Read in English"
     */
    englishLinkText: string;

    /**
     * Set aria label for home link.
     *
     * @default "Volver a la página de inicio"
     */
    linkLabel: string;

    /**
     * Set custom home link text.
     *
     * @default "Volver a la página de inicio"
     */
    linkText: string;

    /**
     * Set custom not found description.
     *
     * @default "La página que buscas no existe"
     */
    quote: string;

    /**
     * Set custom not found message.
     *
     * @default 'Página no encontrada'
     */
    title: string;
  }
}
