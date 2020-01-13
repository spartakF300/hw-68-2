import React, {Component} from 'react';
import Form from "../../components/Form/Form";
import List from "../../components/List/List";
import {connect} from 'react-redux'
import {addTask, getTasks, postTask, remove} from "../../store/action";
import Spinner from "../../components/UI/Spinner/Spinner";


class TodoList extends Component {
    componentDidMount() {
        this.props.getTasks()
    }

    render() {
        let list = (
            this.props.list.map((item) => {
                return <List
                    text={item.text}
                    dataTime={item.dataTime}
                    key={item.id}
                    remove={() => this.props.remove(item.id)}
                />
            })
        );
        let spinner = <Spinner/>;
        return (
            <div className={'container'}>
                <Form save={this.props.postTask} change={this.props.addTask}/>
                <div className={'list-wrap'}>
                    {this.props.loading ? spinner : null}
                    {list}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list,
        text: state.text,
        loading: state.loading
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (event) => dispatch(addTask(event.target.value)),
        postTask: (e) => dispatch(postTask(e,)),
        getTasks: () => dispatch(getTasks()),
        remove: (id) => dispatch(remove(id))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);