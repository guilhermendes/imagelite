
'use client'

import { Template, ImageCard } from "@/components"
import { useState } from "react"

export default function GaleriaPage(){

    const image1 = 'https://eduindex.org/wp-content/uploads/2021/07/green-solution.jpg'
    const image2 = 'https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_auto,q_auto/v1738071197/pmfj48ojvfwmmhli40q1.jpg'

    const nome1 =  'Arvore'
    const nome2 = 'Natureza'

    const [codigoImage, setCodigoImage] = useState<number>(2);
    const [urlImage, setUrlImage] = useState<string>(image2);
    const [nomeImage, setNomeImage] = useState<string>(nome2);

    function mudarImage(){
        if(codigoImage == 1){
            setCodigoImage(2)
            setUrlImage(image2)
            setNomeImage(nome2)
        }else{
            setCodigoImage(1)
            setUrlImage(image1)
            setNomeImage(nome1)
        }
    }

    return (
        <Template>
            <button className="bg-gray-500" onClick={mudarImage}>clique para mudar</button>
            <section className="grid grid-cols-3 gap-8">
                <ImageCard nome={nomeImage} tamanho="10MB" dataUpload=" 10/01/2024" src={urlImage}/>
            </section>
        </Template>
    )
}