import styles from '../styles/Estiloso.module.css'
import Layout from '@/components/Layout'

export default function Estiloso(){
    return (
        <Layout>
            <div className={styles.roxo}>
                <h1>Estilo usando Css Modules</h1>
            </div>
        </Layout>
    )
}