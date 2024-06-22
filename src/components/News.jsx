import { useEffect, useState } from "react";

import { fetchAllNews } from "../services/NewsService";
import { Container, Row } from "react-bootstrap";
import { NewsArticle } from "./NewsArticle";

export function News(){

    const [articles,setArticles]=useState([]);

    async function fetchArticles(){
        try {
            const result=await fetchAllNews();
            setArticles(result.articles);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchArticles();
    },[]);

    return (
        <Container>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
            <Row>
                {
                    articles.map((article) => {
                        return (
                            <NewsArticle article={article}></NewsArticle>
                        );
                    })
                }
            </Row>
        </Container>
        
    );
}