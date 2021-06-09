import React, { memo } from 'react';
import styles from './search_header.module.css';

// /1. 리액트에서 빌드가 된 최종 배포상태에서 동작하는 경로를 기준으로 설정이 되기 때문에 /public/.. 을 붙여주지 않아도 되어요 :)
// 배포되면 public/안에 있는 index.html 등 리소스들이 최상위 루트로 지정되거든요

const SearchHeader = memo(({ search }) => {
    const inputRef = React.useRef();
    const handleSearch = inputValue => {
        inputRef.current.value = '';
        search(inputValue);
    }
    const onKeyPress = event => {
        if (event.key === 'Enter') {
            handleSearch(inputRef.current.value)
        }
    }
    const onClick = () => {
        handleSearch(inputRef.current.value)
    }
    return (
        <header className={styles.header}>
            <a href="./" className={styles.logo}>
                <img className={styles.img} src='./images/logo.png' alt="logo" ></img>
                <h1 className={styles.title}>Youtube</h1>
            </a>
            <input
                className={styles.input}
                ref={inputRef}
                onKeyPress={onKeyPress}
                type="text"
                placeholder="Search..."
            />
            <button className={styles.button} type="submit" onClick={onClick}>
                <img className={styles.buttonImg} src="./images/search.png" alt="search"></img>
            </button>
        </header>
    )
});


export default SearchHeader;