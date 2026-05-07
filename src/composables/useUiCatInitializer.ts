import type IMicroFrontendConfiguration from "@/models/IMicroFrontendConfiguration.ts";

export default function useUiCatInitializer() {
    const loadStyles = (baseUrl?: string) => {
        const linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.type = "text/css";
        linkElement.href = `${baseUrl}/api/assets`;

        const head = document.head;
        const firstChild = head.firstChild;

        head.insertBefore(linkElement, firstChild);
    };

    const initialize = ({baseUrl}: IMicroFrontendConfiguration) => {
        loadStyles(baseUrl);
    };

    return {initialize};
}
