import { Template } from "@/types";

export const templates: Template[] = [
    {
        id: 'social-post',
        label: 'social Media Post',
        description: 'post per instagram, lnkedin o twitter/X',
        fields: [{ name: 'product', label: 'Prodotto/servizio', placeholder: 'App di medtazione', type: 'text' },
        { name: 'audience', label: 'target audience', placeholder: 'es. professionisti 30-40anni', type: 'text' },
        { name: 'goal', label: 'obiettvo', placeholder: 'es. aumentare download', type: 'text' }
        ],
        systemPrompt: 'Sei un esperto copywriter per social media. Scrivi post coinvolgenti, concisi e con call-to-action efficace. Usa emoji con moderazione.'
    },
    {
        id: 'email-subject',
        label: 'Email Subject Line',
        description: 'Oggetto email ad alto tasso di apertura',
        fields: [
            { name: 'offer', label: 'Offerta/Contenuto', placeholder: 'es. Sconto 30% sui corsi', type: 'text' },
            { name: 'audience', label: 'Destinatari', placeholder: 'es. Clienti inattivi', type: 'text' },
        ],
        systemPrompt: 'Sei un esperto di email marketing. Genera 5 varianti di oggetto email accattivanti, sotto i 50 caratteri, che massimizzano il tasso di apertura.',

    },
    {
        id: 'product-description',
        label: 'Descrizione Prodotto',
        description: 'Copy persuasivo per e-commerce',
        fields: [
            { name: 'product', label: 'Nome prodotto', placeholder: 'es. Borraccia termica 500ml', type: 'text' },
            { name: 'features', label: 'Caratteristiche principali', placeholder: 'es. 24h caldo, acciaio inox', type: 'textarea' },
            { name: 'audience', label: 'Cliente ideale', placeholder: 'es. Sportivi e outdoor', type: 'text' },
        ],
        systemPrompt: 'Sei un copywriter e-commerce esperto. Scrivi descrizioni prodotto persuasive che evidenziano benefici, non solo caratteristiche. Max 150 parole.',
    },
    {
        id: 'ad-copy',
        label: 'Annuncio pubblicitario',
        description: 'copy per google ads o meta ads',
        fields: [
            { name: 'product', label: 'Prodotto/servizio', placeholder: 'es. software gestone fatture', type: 'text' },
            { name: 'benefit', label: 'beneficio principale', placeholder: 'risparima 3 ore a settimana', type: 'text' },
            { name: 'cta', label: 'Call to action', placeholder: 'Prova gratis 14 giorni', type: 'text' }
        ],
        systemPrompt: 'Sei un esperto di advetising digitale. Scrivi headline e descrption per annunci paid che convertono, rispettando i limiti di caratteri di google ads e meta ads'
    },
    {
        id: 'blog-intro',
        label: 'Intro articolo blog',
        description: 'Apertura articolo che cattura l\' attenzione',
        fields: [
            { name: 'topic', label: 'Argomento', placeholder: 'Come fare il ceo nel 2016', type: 'text' },
            { name: 'audience', label: 'Lettori target', placeholder: 'es. imprenditore digitale', type: 'text' }
        ],
        systemPrompt: 'Sei un content writer esprrto. Scrivi un\' introduzione blog di 80-100 parole che agganci il lettore con una domanda o affermazione provocotrio, poi presneta problema e soluzione '
    }
]

export const tones = [
    {value:'professionale',label:'Professionale'},
    {value:'amichevole',label:'Amichevole'},
    {value:'urgente',label:'Urgente'},
    {value:'ispirazionale',label:'Ispirazionale'},
    {value:'divertente',label:'Divertente'},
]