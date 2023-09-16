import {useSiteConfig} from "/@/stores/siteConfig";

export function openSocialMediaLink(link: string) {
    window.open(link);
}

export function openFacebook() {
    const site = useSiteConfig();
    openSocialMediaLink(site.facebook);
}

export function openInstagram() {
    const site = useSiteConfig();
    openSocialMediaLink(site.instagram);
}

export function openTwitter() {
    const site = useSiteConfig();
    openSocialMediaLink(site.twitter);
}

export function openWhatsApp() {
    const site = useSiteConfig();
    openSocialMediaLink(site.whatsapp);
}
