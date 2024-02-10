import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Text, Title } = Typography;
const { Option } = Select;

const demoImgUrl = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = () => {
    // const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data } = useGetCryptosQuery(100);
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'CRYPTO' });
    if (!cryptoNews?.data.news) return 'Loading...';
    console.log(cryptoNews);

    return (
        <Row gutter={[24, 24]}>
                {/* <Col span={24}>
                    <Select
                        showSearch
                        className="select-news"
                        placeholder="Select a Crypto"
                        optionFilterProp="children"
                        onChange={(value) => setNewsCategory(value)}
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="Cryptocurrency">Cryptocurrency</Option>
                        {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}

                    </Select>
                </Col> */}
            {cryptoNews.data.news?.map((news, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <a href={news.article_url} target="_blank" rel="noreferrer">
                        <Card hoverable className="news-card">
                                <div className="news-image-container">
                                    <Title className="news" level={4}>{news.article_title}</Title>
                                    <img style={{ maxWidth: '100px', maxHeight: '100px'}} src={news?.article_photo_url || demoImgUrl} alt="news"/>
                                </div>
                                <div className="provider-container">
                                    <Text className="proveder-name">{news.source}</Text>
                                    <Text>{moment(news.post_time_utc).startOf('ss').fromNow()}</Text>
                                </div>
                        </Card>
                    </a>
                </Col>
            ))}
        </Row>
    )
}

export default News