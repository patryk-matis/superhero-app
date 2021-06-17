import {Input, Row, Col, Typography} from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';
import './index.css';
import axios from "axios";
import HeroList from '../../HeroList';

const {Search} = Input;
const {Title} = Typography;

export default function HeroPage(){
    const [fetchingHeroes, setFetchingHeroes] = useState(false);
    const [heroArray, setHeroArray] = useState([]);

    const fetchHeroes = async (value) => {
        console.log("search")
        setFetchingHeroes(true);
        try {
            const res = await axios.get(
                '/' + process.env.REACT_APP_SUPERHERO_API_TOKEN + '/search/' + value,
            );
            setHeroArray(res.data.results);
        } catch (e) {
            console.log(e);
        }
        setFetchingHeroes(false);
    } 

    return (
        <div className="heroPage-main">
            <Col xs={{span: 20, offset: 2}} md={{span: 10, offset: 7}}>
                <Row justify="center">
                    <Title mark >Superhero search</Title>
                </Row>
            </Col>
            <Col xs={{span: 20, offset: 2}} md={{span: 8, offset: 8}}>
                <Row>
                    {!fetchingHeroes ? 
                    <Search
                        placeholder="type superhero name here"
                        enterButton="Search."
                        size="large"
                        onSearch={(value) => fetchHeroes(value)}
                    />
                    :
                    <Search placeholder="type superhero name here" enterButton="Search" size="large" loading/>
                    }
                </Row>
                {(heroArray?.length > 0) ?
                    <HeroList heroArray={heroArray}/>
                    :
                    null
                }
            </Col>
        </div>
    );
}