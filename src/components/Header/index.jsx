import React, { useCallback, memo } from 'react';
import { useSelector } from 'react-redux';

import AsyncSearch from 'components/UI/input/Search/AsyncSearch';
import SearchTaskItem from './SearchTaskItem';

import { useActions } from 'hooks/useActions';

import styles from './header.module.scss';

const Header = () => {
	const actions = useActions();
	const tasks = useSelector(state => state.todo);

	const onChangeSearchHandler = useCallback(
		async value => {
			const data = async () => {
				// const res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments').then(res => res.json());
				// return res.map(el => value + el.email);
				return Object.values(tasks.columns)
					.map(el => el.items)
					.flat()
					.filter(el => el.name.toLowerCase().includes(value.toLowerCase()))
					.map((el, i) => ({ ...el, key: i }));
			};
			const newData = await data();
			return newData;
		},
		[tasks]
	);

	const onSubmitSearchHandler = useCallback(
		(...rest) => {
			actions.changeDrawerToDoItem(true);
			actions.changeLastOpenedItemId(rest[0].id);
		},
		[actions]
	);

	return (
		<div className={styles.header}>
			<h2 className={styles.header__title}>Hello, Richard</h2>
			<div className={styles.header__bar}>
				<div className={styles.search}>
					<AsyncSearch itemComponent={SearchTaskItem} onChange={onChangeSearchHandler} onSubmit={onSubmitSearchHandler} />
				</div>
			</div>
		</div>
	);
};

export default memo(Header);
