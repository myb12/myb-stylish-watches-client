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
                    <Typography sx={{ flexShrink: 0, display: "flex", alignItems: "center" }} >
                        <FaHandPointUp className="accordion-icon" /> Where is my order?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: "rgb(195 144 82 / 30%)" }}>
                    <Typography>
                        All orders are processed and shipped out by 5pm (PST) Monday through Friday. Orders received after 12pm (PST) will be processed the next business day. All shipping times are estimates provided to us by our shipping partners. Weather or missed delivery attempts can often be a factor in delayed shipments. Also international shipments can often be delayed due to high variance with each country’s customs processing. To track your package, just find your shipping confirmation email from us and click Track Package. If you choose Route Package Protection during checkout then find the shipping email from Route to see your upgrading tracking abilities.
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
                    <Typography sx={{ flexShrink: 0, display: "flex", alignItems: "center" }}><FaHandPointUp className="accordion-icon" /> Can I cancel my order?</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: "rgb(195 144 82 / 30%)" }}>
                    <Typography>
                        Orders are processed and sent to our fulfillment center within 20 minutes of the order being completed. We can cancel an order at no charge if we are notified within 15 minutes of your order being placed. Please call us at 925-820-4300 between 8am-5pm Pacific Standard Time for immediate assistance. Emails will not guarantee order cancellations, as they are answered in the order they are received. Orders cannot be cancelled after this 15 minute window. Preorders and special orders cannot be cancelled as the funds have already been sent to the manufacturer to secure your watch.
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
                    <Typography sx={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
                        <FaHandPointUp className="accordion-icon" />How do I track my package?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: "rgb(195 144 82 / 30%)" }}>
                    <Typography>
                        When your package has shipped you will receive an automated email containing a tracking number. You can enter the tracking number on MYB Service’s website to track your shipment <a href="https://myb-stylish-watches.web.app/dashboard/myOrders" target="_blank" rel="noreferrer">https://myb-stylish-watches.web.app/dashboard/myOrders</a>. Can't find the tracking email? Create an account on MYB Stylish Watches using the email linked to your order. Visit the "Dashboard" page and click on the order number that you wish to track.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion style={{
                margin: "10px 0px",
            }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: '#c39052' }} />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    style={{ borderLeft: "5px solid #c39052" }}
                >
                    <Typography sx={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
                        <FaHandPointUp className="accordion-icon" />Are the watches authentic?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: "rgb(195 144 82 / 30%)" }}>
                    <Typography>
                        Yes, MYB Stylish watches is an Authorized Dealer of ALL the brands/watches we carry and they all come with full manufacturer warranties that are honored internationally. All of our watches sold are 100% Authentic Guaranteed, brand new, unworn and come in the original manufacturer packaging.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion style={{
                margin: "10px 0px",
            }} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: '#c39052' }} />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    style={{ borderLeft: "5px solid #c39052" }}
                >
                    <Typography sx={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
                        <FaHandPointUp className="accordion-icon" />How does my watch work?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: "rgb(195 144 82 / 30%)" }}>
                    <Typography>
                        Your watch should have an instruction booklet for specific functionality. Some eco-friendly brands (example: Vestal) do not provide a printed instructional manual, but make the instruction manuals available for download on their brand website. If you need additional help, we would be more than happy to assist you. Visit our Contact Us page.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
}

export default FaqAccordion;