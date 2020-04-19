import React, { useState, useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import styles from './Display.scss';
import Clipboard from 'react-clipboard.js';


const Display = ({ content, reset }) => {

  if (content.length === 0) return null;
  const [text, setText] = useState('');
  const textRef = useRef();

  useEffect(() => {
    textRef.current.click();
  }, [content]);

  const [
    NAME,
    CREATIVE_PROCESS,
    FLOW,
    PROJECT,
    ELEMENTS_OF_ART,
    PRINCIPLES_OF_ART,
    COMPOSITION,
    PROCESS_AND_SKILLS,
    ART_HISTORICAL_PRINCIPLES,
    CREATIVE_VOICE,
    INSPIRATION,
    RESPONSIBILITY,
    RESPECT,
    EVAL,
    ADDENDUM,
  ] = content;


  const handleCopy = (e) => {
    setText(e.currentTarget.textContent);
  };

  return (
    <section className={styles.Display}>
      <p ref={textRef} onClick={handleCopy}>
          As a student, <Datum text={NAME} /> engages in the creative process through <Datum text={CREATIVE_PROCESS} />.  Their ability to engage in the flow of their work <Datum text={FLOW} />. This semester, <Datum text={NAME} /> has shown growth in their <Datum text={PROJECT} />. Their work shows good use of <Datum text={ELEMENTS_OF_ART} /> and <Datum text={PRINCIPLES_OF_ART} />. Compositionally, their work has shown <Datum text={COMPOSITION} />.  <Datum text={NAME} /> has also shown progress in their utilization of <Datum text={PROCESS_AND_SKILLS} />. Conceptually, their work shows the incorporation of <Datum text={ART_HISTORICAL_PRINCIPLES} />, and the development of their creative voice through <Datum text={CREATIVE_VOICE} />. Personally, <Datum text={NAME} /> shows their inspiration through <Datum text={INSPIRATION} />.  In class, <Datum text={NAME} /> shows responsibility for their actions through <Datum text={RESPONSIBILITY} />, and respect through <Datum text={RESPECT} />. Overall, <Datum text={NAME} /> has had <Datum text={EVAL} /> semester in art<Datum text={ADDENDUM} />.
      </p>
      <Clipboard data-clipboard-text={text}>
        Copy to Clipboard!
      </Clipboard>
      <button onClick={reset} >Reset</button>
    </section>
  );
};

Display.propTypes = {
  content: propTypes.array,
  reset: propTypes.func,
};

const Datum = ({ text }) => {
  const [originalText, setOriginalText] = useState('');
  const [highlight, setHighlight] = useState(true);

  useEffect(() => {
    if (text && originalText === '') return setOriginalText(text);
    if (originalText !== text) setHighlight(false);
  });


  return (
    <span className={highlight ? 'highlight' : ''}>{text}</span>
  );
};
Datum.propTypes = { text: propTypes.string };

export default Display;
