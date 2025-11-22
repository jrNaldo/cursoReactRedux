import Layout from "@/components/Layout";
import styles from '../styles/Estado.module.css'
import { useState } from "react";

export default function Estado() {
    const [num, setNum] = useState(0)

    return (
        <Layout>
            <h1>Componente com estado</h1>
            <div>{num}</div>

            <div>
                <button onClick={() => setNum(num + 1)} className={styles.Estado}>+1</button>
                <button onClick={() => setNum(num - 1)} className={styles.Estado}>-1</button>
            </div>
        </Layout>
    )
}