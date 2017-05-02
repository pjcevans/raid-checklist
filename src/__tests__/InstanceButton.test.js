import React from 'react';
import ReactDOM from 'react-dom';
import InstanceButton from '../components/ui/InstanceButton';

describe('InstanceButton', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<InstanceButton instance={"naxx"}
                                             key={"naxx"}
                                             buttonClass={""}
                                             instances={{
                                               "aq40": {"url":"http://imgur.com/VoqlT6O.jpg"},
                                               "tryhard": {"url":"http://imgur.com/QVug5l4.jpg"},
                                               "naxx": {"url":"http://imgur.com/t3EUVX7.jpg"},
                                               "kt/saph": {"url":"https://s3.amazonaws.com/naeu-icb2/icons/0/100/100590/1.cai"}
                                             }}
                                             updateInstances={() => undefined} />, div);
    });
});
