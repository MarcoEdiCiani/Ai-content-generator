
export default function HomeSection(){
    return(
        <div className="relative overflow-hidden">
            
            <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-amber-600/20 blur-[100px] animate-pulse"/>
            <div className="pointer-events-none absolute top-20 -right-20 w-[350px] h-[350px] rounded-full bg-cyan-600/20 blur-[100px] "/>
            <div className="pointer-events-none absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-amber-600/20 blur-[100px] "/>
            
            <div className="relative z-10">
             <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
                AI-Powered Marketing
             </p>
            <h1 className="text-5xl font-medium text-gray-900 mb-4 leading-tight">
                Crea testi efficaci
            </h1>
            <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
                Scegli il template, metti i tuoi dettagli, ottini una descrzioner markleting proferssioanle in
            </p>

            <div className="flex items-center justify-center gap-4 my-10">
                
                <div className="flex flex-col items-center gap-4 my-10">
                    <div className="w-36 h-24 rounded-2xl border border-amber-200 bg-amber-50 flex flex-col items-center justify-center gap-1">
                        <span className="text-sm font-medium text-gray-700">Input</span>
                        <span className="text-xs text-gray-400 text-center px-2">Template + dettagli </span>
                    </div>
                    <span className="text-xs text-gray-300">1</span>
                </div>
                
                <div className="text-gray-200 text-2xl mb-4">&amp#8594</div>
                
                <div className="flex flex-col items-center gap-2">
                    <div className="w-44 h-24 rounded-2xl border border-amber-300 bg-amber-50 flex-col items-center justify-center gap-1">
                        <span className="text-sm font-medium text-gray-700">Agents AI</span>
                        <span className="text-xs text-gray-400 text-center px-2">Analizza e genera </span>
                    </div>
                    <span className="text-xs text-gray-300">2</span>
                </div>

                <div className="text-gray-200 text-2xl mb-4">&amp#8594</div>

                 <div className="flex flex-col items-center gap-2">
                    <div className="w-44 h-24 rounded-2xl border border-amber-300 bg-amber-50 flex-col items-center justify-center gap-1">
                        <span className="text-sm font-medium text-gray-700">Output</span>
                        <span className="text-xs text-gray-400 text-center px-2">Testo pronto</span>
                    </div>
                    <span className="text-xs text-gray-300">3</span>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
                {['Social Post','Email subject','Descriozione Prodotto','Ad copy','Blog intro'].map(t=> (
                    <span key={t} className="px-4 py-1.5 rounded-full border border-amber-200 text-xs text-amber-500">
                        {t}
                    </span>
                ))}
            </div>

            <div className="flex justify-center gap-12 mt-8 border-t border-amber-100">
                {[
                    {value:'5',label:'template'},
                    {value:'<10',label:'generazione'},
                    {value:'100%',label:'gratis'},
                ].map(s=> (
                   <div key={s.label} className="text-center">
                    <div className="text-2xl font-medium text-gray-900">{s.value}</div>
                    <div className="text-xs text-gray-400 mt-1">{s.label}</div>
                   </div>
                ))}
            </div>
            </div>

            
        </div>
    )
    
}