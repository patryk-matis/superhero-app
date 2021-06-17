import {List, Avatar, Col, Row, Popover, Divider} from 'antd';
import './index.css';

export default function HeroList(props){
    return(
        <List 
        itemLayout="horizontal"
        dataSource={props.heroArray}
        pagination={{pageSize: 7}}
        renderItem={item => (
            <List.Item>
                <List.Item.Meta
                    avatar={<Avatar size="large" shape="square" src={item.image.url}/>}
                    title={
                        <Popover title={item.name} trigger="click" content={
                            <Row>
                                <Col md={8}>
                                    <img className="herolist-image" src={item.image.url}/>
                                </Col>
                                <Divider className="herolist-divider"/>
                                <Col xs={24} md={8} offset={1}>
                                    <p>Full Name: {item.biography["full-name"]}</p>
                                    <p>Alter Egos: {item.biography["alter-egos"]}</p>
                                    <p>Aliases:</p>
                                    <div className="herolist-alias">
                                        {item.biography.aliases.map(alias => {
                                            return <p>- {alias}</p>
                                        })}
                                    </div>
                                    <p>Place of birth: {item.biography["place-of-birth"]}</p>
                                    <p>First appearance: {item.biography["first-appearance"]}</p>
                                    <p>Publisher: {item.biography.publisher}</p>
                                    <p>Alignment: {item.biography.alignment}</p>
                                </Col>
                                <Divider className="herolist-divider"/>
                                <Col md={5}>
                                    <p>Powerstats:</p>
                                    <div className="herolist-alias">
                                        <p>Intelligence: {item.powerstats.intelligence}</p>
                                        <p>Strength: {item.powerstats.strength}</p>
                                        <p>Speed: {item.powerstats.speed}</p>
                                        <p>Durability: {item.powerstats.durability}</p>
                                        <p>Power: {item.powerstats.power}</p>
                                        <p>Combat: {item.powerstats.combat}</p>
                                    </div>
                                </Col>
                            </Row>
                            }>
                            <a>{item.name}</a>
                        </Popover>
                    }
                />
            </List.Item>
        )}                       
        />
    );
}