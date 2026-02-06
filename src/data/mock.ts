export type CategoryKey =
    | "arrangement"
    | "overnatting"
    | "spisestader"
    | "lokalmat"
    | "kultur"
    | "skjultePerler"
    | "butikkar"
    | "turmoglegheiter";

export type Place = {
    id: string;
    name: string;
    category: CategoryKey;
    area: "Gulen" | "Masfjorden";
    short: string;
    description: string;
    tags: string[];
    priceLevel: "Gratis" | "Rimeleg" | "Middels" | "Høg";
    rating: number;
    address: string;
    googleMapsUrl?: string;
    openingHours?: string;
    phone?: string;
    website?: string;
    image?: string;
    lat: number;
    lng: number;
};

export type EventItem = {
    id: string;
    title: string;
    dateISO: string;
    placeId: string;
    price?: string;
};

export const categories: {
    key: CategoryKey;
    label: string;
    icon: string;
    desc: string;
}[] = [
    {
        key: "arrangement",
        label: "Arrangement",
        icon: "event",
        desc: "Konsertar, festivalar og lokale hendingar",
    },
    {
        key: "overnatting",
        label: "Overnatting",
        icon: "hotel",
        desc: "Hotell, hytter og unike overnattingsstader",
    },
    {
        key: "spisestader",
        label: "Spisestader",
        icon: "restaurant",
        desc: "Restaurantar, kaféar og matopplevingar",
    },
    {
        key: "lokalmat",
        label: "Lokalmat",
        icon: "store",
        desc: "Gard, utsal og berekraftige produkt",
    },
    {
        key: "kultur",
        label: "Kultur",
        icon: "museum",
        desc: "Museum, historie og kulturtilbod",
    },
    {
        key: "skjultePerler",
        label: "Skjulte perler",
        icon: "diamond",
        desc: "Tips, utsiktspunkt og små skattar",
    },
    {
        key: "butikkar",
        label: "Butikkar",
        icon: "shopping",
        desc: "Lokal handel, gåver og utstyr",
    },
    {
        key: "turmoglegheiter",
        label: "Turmoglegheiter",
        icon: "hike",
        desc: "Turar, natur og aktivitetar",
    },
];

export const places: Place[] = [
    {
        id: "fjordguiding",
        name: "Liam har endret her",
        category: "turmoglegheiter",
        area: "Gulen",
        short: "Guiding på fjord og fjell – skreddarsydde opplevingar.",
        description:
            "Opplev fjorden frå beste vinkel med lokalkjente guidar. Passar for både turistar, hyttefolk og lokalfolk som vil oppdage noko nytt.",
        tags: ["Guide", "Natur", "Fjord", "Oppleving"],
        priceLevel: "Middels",
        rating: 4.8,
        address: "Gulen, Vestland",
        website: "https://www.fjordguiding.no",
        googleMapsUrl: "https://goo.gl/maps/example1",
        openingHours: "Etter avtale",
        lat: 60.98,
        lng: 5.07,
    },
    {
        id: "sande-gardsmat",
        name: "Sande Gardsmat",
        category: "lokalmat",
        area: "Masfjorden",
        short: "Lokalmat rett frå garden – ekte smak av bygda.",
        description:
            "Eit lite gardsutsal med fokus på kvalitet, berekraft og kortreist mat. Perfekt stopp for å handle med seg noko spesielt.",
        tags: ["Lokalmat", "Gard", "Berekraft"],
        priceLevel: "Rimeleg",
        rating: 4.6,
        address: "Masfjorden, Vestland",
        website: "https://sande-gardsmat.no",
        googleMapsUrl: "https://goo.gl/maps/example2",
        openingHours: "Fre–Søn 12–17",
        lat: 60.8,
        lng: 5.6,
    },
    {
        id: "utsiktspunkt-fjordblikk",
        name: "Utsiktspunkt: Fjordblikk",
        category: "skjultePerler",
        area: "Gulen",
        short: "Kort tur – stor utsikt over fjorden ved solnedgang.",
        description:
            "Ein enkel og barnevennleg liten tur som gir overraskande flott utsikt. Ta med termos og nyt roen.",
        tags: ["Utsikt", "Kort tur", "Foto"],
        priceLevel: "Gratis",
        rating: 4.7,
        address: "Gulen (nær parkering)",
        googleMapsUrl: "https://goo.gl/maps/example3",
        openingHours: "Alltid open",
        lat: 61.03,
        lng: 5.16,
    },
    {
        id: "bygdekafeen",
        name: "Bygdekaféen",
        category: "spisestader",
        area: "Masfjorden",
        short: "Kaffi, bakst og gode lunsjar – midt i sentrum.",
        description:
            "Ei hyggeleg kafé med lokal bakst og sesongbaserte rettar. Populær både for folk på reise og dei som bur i nærleiken.",
        tags: ["Kafé", "Bakst", "Lunsj"],
        priceLevel: "Rimeleg",
        rating: 4.3,
        address: "Masfjorden sentrum",
        openingHours: "Man–Fre 10–16",
        lat: 60.77,
        lng: 5.66,
    },
    {
        id: "historisk-kyrkje",
        name: "Historisk kyrkje",
        category: "kultur",
        area: "Gulen",
        short: "Vakker middelalder-kyrkje frå 1200-talet.",
        description:
            "Godt bevart kyrkje med flott arkitektur og rik historie. Gratis inngang og guida turar på førespurnad.",
        tags: ["Historie", "Arkitektur", "Kultur"],
        priceLevel: "Gratis",
        rating: 4.5,
        address: "Gulen sentrum",
        openingHours: "Alltid open",
        lat: 60.96,
        lng: 5.18,
    },
    {
        id: "fjellhytta",
        name: "Fjellhytta",
        category: "overnatting",
        area: "Gulen",
        short: "Overnatting med panoramautsikt over fjorden.",
        description:
            "Moderne hytte med fantastisk utsikt. Perfekt for par eller småfamiliar som vil ha ro og natur på dørstokken.",
        tags: ["Hytte", "Utsikt", "Moderne"],
        priceLevel: "Middels",
        rating: 4.9,
        address: "Fjellet, Gulen",
        openingHours: "Heile døgnet",
        lat: 60.99,
        lng: 5.12,
    },
    {
        id: "laven-kulturhus",
        name: "Låven Kulturhus",
        category: "kultur",
        area: "Masfjorden",
        short: "Konsertar og arrangement i unike lokale.",
        description:
            "Gammalt låve omgjort til kulturhus. Heimstad for konsertar, teater og andre kulturelle arrangement gjennom året.",
        tags: ["Konsert", "Kultur", "Arrangement"],
        priceLevel: "Rimeleg",
        rating: 4.4,
        address: "Masfjorden",
        openingHours: "Varierer med arrangement",
        lat: 60.88,
        lng: 5.32,
    },
    {
        id: "fjordrestauranten",
        name: "Fjordrestauranten",
        category: "spisestader",
        area: "Gulen",
        short: "Fine dining med lokal skalldyr og fersk fisk.",
        description:
            "Gourmet-opplevelse med fersk fisk og skalldyr frå fjorden. Sesongbasert meny og flott utsikt frå alle bord.",
        tags: ["Restaurant", "Skalldyr", "Fine dining"],
        priceLevel: "Høg",
        rating: 4.8,
        address: "Bryggekanten, Gulen",
        openingHours: "Ons–Søn 17–22",
        lat: 60.94,
        lng: 5.19,
    },
    {
        id: "fossestien",
        name: "Fossestien",
        category: "turmoglegheiter",
        area: "Masfjorden",
        short: "Natursti med fossefall – perfekt for familieturar.",
        description:
            "Lett tur langs elva med fleire fossefall og flott natur. Barnevogn-vennleg og godt merka.",
        tags: ["Tursti", "Foss", "Familie"],
        priceLevel: "Gratis",
        rating: 4.6,
        address: "Masfjorden",
        openingHours: "Alltid open",
        lat: 60.83,
        lng: 5.41,
    },
    {
        id: "gardsbutikken",
        name: "Gardsbutikken",
        category: "butikkar",
        area: "Gulen",
        short: "Lokale produkt, handverk og suvenirer.",
        description:
            "Sal av lokalmat, handverk og suvenirer frå bygda. Perfekt stad å finne unike gåver eller noko godt heim.",
        tags: ["Lokal handel", "Gåver", "Handverk"],
        priceLevel: "Middels",
        rating: 4.5,
        address: "Gulen sentrum",
        openingHours: "Mån–Fre 10–17, Lau 10–15",
        lat: 60.95,
        lng: 5.17,
    },
];

export const events: EventItem[] = [
    {
        id: "e1",
        title: "Sommarkveld med lokal musikk",
        dateISO: "2026-06-20",
        placeId: "bygdekafeen",
        price: "150 kr",
    },
    {
        id: "e2",
        title: "Guiding: Fjord & utsikt",
        dateISO: "2026-06-27",
        placeId: "fjordguiding",
        price: "frå 590 kr",
    },
    {
        id: "e3",
        title: "Konsert i Låven",
        dateISO: "2026-07-15",
        placeId: "laven-kulturhus",
        price: "200 kr",
    },
];
