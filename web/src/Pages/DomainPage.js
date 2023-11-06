import React from 'react';
import { Domain} from '../Component';

const DomainPage = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Domain
        title="Literature Survey"
        description="Previous studies have extensively explored various approaches to address global air pollution, highlighting the critical need for comprehensive methods. However, limited research has integrated image processing, time series analysis, chatbot communication, and facemask recognition to tackle this issue holistically. Some literature emphasizes the importance of public awareness and prediction models, while others stress the significance of real-time communication and technology-based interventions. Nevertheless, no existing research has combined these elements to create a multifaceted strategy that not only measures pollution levels but also engages the public and predicts future pollution trends effectively."
      />
      <Domain
        title="Research Gap"
        description="While some studies have investigated different aspects of combating global air pollution, a significant research gap exists concerning the integration of diverse technologies to create a comprehensive strategy. Prior research has mainly focused on individual components or specific methods, neglecting the potential benefits of combining image processing, time series analysis, chatbots, and facemask recognition. This gap highlights the need for a more holistic approach that not only measures pollution levels accurately but also engages the public in taking proactive measures and predicts future pollution patterns efficiently."
      />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Domain
        title="Research Problem"
        description="The current research lacks a comprehensive method to address the problems posed by global air pollution, particularly in terms of integrating various technologies for efficient pollution measurement, public engagement, and prediction. There is a notable gap in the utilization of image processing, time series analysis, chatbot communication, and facemask recognition to develop a multifaceted strategy that promotes public awareness, encourages proactive measures, and predicts future pollution trends accurately. Consequently, there is a need to develop an integrated approach that encompasses these technologies to effectively combat air pollution and its adverse impacts on public health and the environment."
      />
      <Domain
        title="Research Objective"
        description="The primary objective of this study is to develop a comprehensive method that effectively reduces the problems associated with global air pollution. Specifically, the research aims to integrate image processing, time series analysis, chatbot communication, and facemask recognition to measure pollution levels accurately, raise public awareness, and predict future pollution trends. Additionally, the study seeks to promote the adoption of proactive measures to mitigate air pollution's adverse effects on public health, environmental conservation, and sustainability."
      />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Domain
        title="Methodology"
        description=" This involves a multi-step approach that integrates various techniques and technologies. Firstly, the study employs image processing methods to analyze cloud pictures and accurately predict pollution levels. Time series analysis is utilized to develop prediction models based on historical patterns, enabling the accurate forecasting of future pollution trends. Additionally, a chatbot system is implemented to facilitate real-time communication with the public, providing environmental information, health risks, and safety procedures. Moreover, the research incorporates a facemask identification system to monitor and promote the use of masks, further contributing to pollution reduction efforts and public health improvement."
      />
      <Domain
        title="Technologies Used"
        description="This utilizes a combination oftechnologies to address global air pollution effectively. Image processing techniques  are applied for precise pollution predictions by analyzing cloud pictures. Time series analysis is employed to develop accurate prediction models based on historical patterns using SARIMA model. The study incorporates a chatbot system to ensure real-time communication with the public, providing information on  health risks, and safety procedures with DIalogFlow. Additionally, a facemask recognition system is utilized to monitor and encourage the use of facemasks using modified CNN algorithem, contributing to pollution reduction and public health enhancement efforts."
      />
      </div>
    </div> 
  );
};

export default DomainPage;
