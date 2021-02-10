import React, { useState, useEffect } from 'react';
import { API } from '../../../API/API';
import { TableStyled, ThStyled, Paginator, TdStyled } from "./EmailsPageComponents.jsx"




export const EmailsPage = () => {

    const [emails, setEmails] = useState([]);
    const [emailProviders, setEmailProviders] = useState([]);

    const [orderByColumn, setOrderByColumn] = useState("id");
    const [order, setOrder] = useState("ASC");
    const [emailProvider, setEmailProvider] = useState(null);
    const [page, setPage] = useState(1);

    const [deletedEntity, setDeletedEntity] = useState(null);

    const deleteEmail = async (id) => {
        const result = await API.deleteEmail(id);
        console.log(result);
        setDeletedEntity(result);
    }

    useEffect(async () => {
        const emailsFromDB = await API.getEmails(orderByColumn, order, emailProvider, page);
        setEmails(emailsFromDB);
    }, [page, orderByColumn, order, emailProvider, deletedEntity])

    useEffect(async () => {
        const emailProvidersFromDb = await API.getEmailProviders();
        setEmailProviders(emailProvidersFromDb);
    }, [])

    

    console.log("rerender");

    return (
        <main>

            <Paginator direction={"column"}>
                <p>Page: {page}</p>
                <div>
                    <button onClick={() => setPage(page > 1 ? page - 1 : page)}>prev</button>
                    <button onClick={() => setPage(emails.length > 0 ? page + 1 : page)}>next</button>
                </div>
                <button onClick={() => setOrder(order === "DESC" ? "ASC" : "DESC")}>Order: {order}</button>
            </Paginator>


            <Paginator direction={"row"}>
                <button onClick={() => setEmailProvider(null)} >No filter by provider</button>
                {
                    emailProviders.map((emailProvider) => {
                        return <button key={emailProvider.emailProvider} onClick={() => setEmailProvider(emailProvider.emailProvider)} >{emailProvider.emailProvider}</button>
                    })
                }
            </Paginator>

            <TableStyled>
                <thead>
                    <tr>
                        <ThStyled isSelected={orderByColumn === "email"} onClick={() => setOrderByColumn("email")}>Email</ThStyled>
                        <ThStyled isSelected={orderByColumn === "id"} onClick={() => setOrderByColumn("id")}>id</ThStyled>
                        <ThStyled isSelected={orderByColumn === "emailProvider"} onClick={() => setOrderByColumn("emailProvider")}>Provider</ThStyled>
                        <ThStyled isSelected={orderByColumn === "createdAt"} onClick={() => setOrderByColumn("createdAt")}>CreatedAt</ThStyled>
                        <ThStyled/>
                    </tr>
                </thead>

                <tbody>
                    {
                        emails.map((email) => {
                            return (
                                <tr key={email.id}>
                                    <TdStyled width={400}>{email.email}</TdStyled>
                                    <TdStyled>{email.id}</TdStyled>
                                    <TdStyled width={300}>{email.emailProvider}</TdStyled>
                                    <TdStyled>{email.createdAt}</TdStyled>
                                    <TdStyled width={50}><button onClick={() => deleteEmail(email.id)}>Delete</button></TdStyled>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </TableStyled>
        </main>
    )
}