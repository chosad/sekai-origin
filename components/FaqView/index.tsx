import {
  Accordion, AccordionDetails, AccordionSummary, Typography,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';

const FaqView = () => (
  <div style={{
    display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 170,
  }}
  >
    <p className="text-faq">FAQ</p>
    <Accordion className="accordion-sekai" style={{ marginTop: 95 }}>
      <AccordionSummary
        expandIcon={<Image src="/Sort-Down.png" alt="" width={55} height={55} />}
      >
        <Typography>WHAT IS SEKAI ABOUT?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion className="accordion-sekai" style={{ marginTop: 30 }}>
      <AccordionSummary
        expandIcon={<Image src="/Sort-Down.png" alt="" width={55} height={55} />}
      >
        <Typography>WHAT ARE THE UTILITIES OF SEKAI?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion className="accordion-sekai" style={{ marginTop: 30 }}>
      <AccordionSummary
        expandIcon={<Image src="/Sort-Down.png" alt="" width={55} height={55} />}
      >
        <Typography>WHAT ARE THE MINT DETAILS?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </div>
);

export default FaqView;
