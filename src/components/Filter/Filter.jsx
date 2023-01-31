import PropTypes from 'prop-types';
import { Input } from 'components/ContactForm/ContactForm.styled';

export function Filter({value,onChangeFilter}) {
    
    return (
        <label>
            Find contacts by name
            <Input type='text' value={value}  onChange={onChangeFilter} />
        </label>
    )
}

Filter.propTypes={
    onChangeFilter: PropTypes.func,
    value:PropTypes.string,
}