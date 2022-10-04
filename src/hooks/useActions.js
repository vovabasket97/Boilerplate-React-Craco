import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TodoSliceActions } from 'store/reducers/todo';

export const useActions = () => {
	const dispatch = useDispatch();
	const actions = useMemo(() => ({ ...TodoSliceActions }), []);

	return useMemo(() => bindActionCreators(actions, dispatch), [actions, dispatch]);
};
