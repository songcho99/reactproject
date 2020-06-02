import React from 'react';
import Button from '@material-ui/core/Button';
const Ex04_Material = () => {
    return (
        <div>
            <Button variant='outlined' color='primary'>Primary</Button>
            <Button variant='outlined' disabled>disabled</Button>
            <Button color='primary' href='http://www.nate.com'>NATE</Button>
            <Button variant='outlined' color='secondary'>Secondary</Button>
            <h3>Size</h3>
            <Button variant='outlined' color='secondary' size='small'>small</Button>
            <Button variant='outlined' color='secondary' size='medium'>medium</Button>
            <Button variant='outlined' color='secondary' size='large'>large</Button>
        </div>
    );
};

export default Ex04_Material;