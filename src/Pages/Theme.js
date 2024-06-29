import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AppNavbar from '../components/Navbar';

const themes = [
    {
        name: 'Bag Theme',
        image: '/Images/bgg.jpeg',
        description: 'A theme suitable for bag stores.',
        recommended: true,
        route: '/bag'
    },
    {
        name: 'Chic Theme',
        image: 'Images/casuals/9.webp',
        description: 'A chic and modern theme.',
        recommended: false,
        route: '/chic'
    },
    {
        name: 'Flexible Theme',
        image: 'Images/watch.webp',
        description: 'A flexible theme for various products.',
        recommended: false,
        route: '/flex'
    }
];

const ThemeSelection = ({ onSelectTheme }) => {
    const [selectedTheme, setSelectedTheme] = useState(null);
    const navigate = useNavigate();

    const handleApplyTheme = (theme) => {
        setSelectedTheme(theme.name);
        onSelectTheme(theme);
        setTimeout(() => {
            navigate(theme.route);
        }, 1000);
    };

    const renderThemeCards = () => {
        return themes.map((theme) => (
            <Col md={4} key={theme.name}>
                <Card className="theme-card" onClick={() => handleApplyTheme(theme)}>
                    <Card.Img variant="top" src={theme.image} alt={theme.name} />
                    <Card.Body>
                        <Card.Title>{theme.name}</Card.Title>
                        <Card.Text>{theme.description}</Card.Text>
                        {theme.recommended && <span className="badge badge-success">Recommended</span>}
                        <Button
                            variant={selectedTheme === theme.name ? 'success' : 'primary'}
                            onClick={(e) => {
                                e.stopPropagation(); 
                                handleApplyTheme(theme);
                            }}
                        >
                            {selectedTheme === theme.name ? <i className="fa-solid fa-circle-check"></i> : 'Apply'}
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        ));
    };

    return (
        <>
            <AppNavbar />
            <div className="theme-selection pt-5 mx-5 my-5">
                <h2>Select a Theme</h2>
                <Row>
                    {renderThemeCards()}
                </Row>
            </div>
        </>
    );
};

export default ThemeSelection;
