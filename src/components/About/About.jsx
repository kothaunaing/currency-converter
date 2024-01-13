/** @format */

const About = ({ data }) => {
  const { getText, getNumber } = data;

  return (
    <div className='About'>
      <div>
        {getText('version')} - {getNumber('0.5.0')}
      </div>
      <div>
        {getText('author')} - {getText('author-name')}
      </div>
    </div>
  );
};

export default About;
