import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};
Pagination.defaultProps = {
    onPageChange: null,
};

function Pagination(props) {
    const {pagination, onPageChange} = props;
    const { _page, _limit,_totalRows} = pagination;
    const lastPage = Math.ceil(_totalRows/_limit);
    function handleOnPageChange(newPage){
        if(onPageChange){
            onPageChange(newPage);
        }
    }
    
    return (
        <div>
            <Button  color="danger" size="lg" disabled={_page <= 1}
            onClick={()=> handleOnPageChange(_page - 1)}
            > Pre
            </Button>
            {' '}
            <Button  color="success" size="lg" disabled={_page >= lastPage}
            onClick={()=> handleOnPageChange(_page + 1)}
            >Next
            </Button>
        </div>
    );
}

export default Pagination;