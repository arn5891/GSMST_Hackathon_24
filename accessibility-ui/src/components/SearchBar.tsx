import './SearchBar.css'
import { FaSearch } from 'react-icons/fa'
import { FormEvent } from 'react';

export default function SearchBar() {
    return (
        <form id="searchbar" onSubmit={submitHandler}>
            <input type="text" required={true} id='search-input' placeholder='Enter URL of site to evaluate' name='url' />
            <span className="search-separator" />
            <button type="submit" id='search-submit'>
                <FaSearch id='search-icon' />
            </button>
        </form>
    );

    function submitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = e.currentTarget
        const formData = Object.fromEntries(new FormData(form))
        form.reset();

        window.location.href = `/fix-issues?url=${formData.url}`

    }
}