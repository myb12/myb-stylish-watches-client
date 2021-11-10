import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';
import { FaHandPointUp } from 'react-icons/fa';
import './FaqAccordion.css'

function FaqAccordion() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container style={{ marginTop: 100 }}>
            <Typography variant="h4" className="title">FAQs</Typography>
            <Accordion style={{
                margin: "10px 0px",
            }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: '#c39052' }} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    style={{ borderLeft: "5px solid #c39052" }}
                >
                    <Typography sx={{ width: '33%', flexShrink: 0, display: "flex", alignItems: "center" }} >
                        <FaHandPointUp className="accordion-icon" /> General settings
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: "rgb(195 144 82 / 30%)" }}>
                    <Typography>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                        Aliquam eget maximus est, id dignissim quam.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{
                margin: "10px 0px",
            }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: '#c39052' }} />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    style={{ borderLeft: "5px solid #c39052" }}
                >
                    <Typography sx={{ width: '33%', flexShrink: 0, display: "flex", alignItems: "center" }}><FaHandPointUp className="accordion-icon" />Users</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        You are currently not an owner
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: "rgb(195 144 82 / 30%)" }}>
                    <Typography>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                        varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                        laoreet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{
                margin: "10px 0px",
            }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: '#c39052' }} />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    style={{ borderLeft: "5px solid #c39052" }}
                >
                    <Typography sx={{ width: '33%', flexShrink: 0, display: "flex", alignItems: "center" }}>
                        <FaHandPointUp className="accordion-icon" />Advanced settings
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Filtering has been entirely disabled for whole web server
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: "rgb(195 144 82 / 30%)" }}>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{
                margin: "10px 0px",
            }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: '#c39052' }} />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    style={{ borderLeft: "5px solid #c39052" }}
                >
                    <Typography sx={{ width: '33%', flexShrink: 0, display: "flex", alignItems: "center" }}>
                        <FaHandPointUp className="accordion-icon" />Advanced settings
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Filtering has been entirely disabled for whole web server
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: "rgb(195 144 82 / 30%)" }}>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
}

export default FaqAccordion;