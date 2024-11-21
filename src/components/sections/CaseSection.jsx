import React from 'react'
import CardFeacture from '../cards/CardFeature'
import '../../styles/sections/CaseSection.css'
import { FaTable,FaRobot,FaCode } from 'react-icons/fa'

export default function CaseSection() {
  return (
    <div className='case-section'>
        <h1 className='title-text'>TECNOLOGIAS ÁGEIS,</h1>
        <h1 className='title-text-lower'>RESULTADOS INCRÍVEIS</h1>
        <h2>Conheça alguns dos nossos Cases de Sucesso</h2>
        <div className='case-cards-grid'>
            <CardFeacture 
            icon={<FaTable />}
            title="Plataforma de Vendas para Delivery"
            text="+50% de eficiência operacional com processamento automatizado de pedidos e relatórios em tempo real."
            />
            <CardFeacture 
            icon={<FaRobot />}
            title="Solução de Atendimento Inteligente"
            text="+35% de conversões diretas a partir do atendimento automatizado e personalização de interações."
            />
            <CardFeacture 
            icon={<FaCode />}
            title="Metodologia de Sprints para Startup de Tecnologia"
            text="Redução de 40% no tempo de desenvolvimento, com entrega do MVP em apenas 3 meses."
            />
        </div>
    </div>
  )
}
