
import { useState } from "react"
import AccordionList from "./components/AccordionList"

export default function Faq() {
    return (
        <main className="faqpage" id="main">
            <div className="container">
                <section>
                    <h2 className="main-title">Câu hỏi thường gặp</h2>
                    <AccordionList />
                </section>
            </div>
        </main>
    )
}



