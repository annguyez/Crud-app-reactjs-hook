import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};
PostFilterForm.defaultProps = {
    onSubmit: null,
};

function PostFilterForm(props) {
    const [search , setSearch ] = useState('');
    const {onSubmit} = props;
    const typingCurrent = useRef(null);
    function handleSearch(e){
        const value = e.target.value;
        setSearch(value);
        if(!onSubmit) return;
        if(typingCurrent.current){
            clearTimeout(typingCurrent.current);
        };


        typingCurrent.current = setTimeout(()=>
        {
            const formValues = {
                searchTerm: value
            }
            //console.log(search);
            onSubmit(formValues);
        },300);
    }
    return (
        <Form>
            <Input value={search} onChange={handleSearch} />
        </Form>
    );
}

export default PostFilterForm;