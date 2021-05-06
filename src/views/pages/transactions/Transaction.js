import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import {
  Trash,
} from 'react-feather';
import { connect } from 'react-redux';
import {logout} from "../../../redux/actions/auth/loginActions"
import { getTransactions,getUserInfo,deleteTransaction,createTransactions } from '../../../redux/actions/transactions';
import AddTransaction from "./AddTransaction"

class TransactionList extends Component {
  static getDerivedStateFromProps(props, state) {
    if (
      props.transactions.data.length !== state.data.length || props.transactions.loading !== state.loading
    ) {
      return {
        data: props.transactions.data,
        loading:props.loading,
      };
    }
    return null;
  }

  state = {
    data: [],
    loading:true,
    columns: [
      {
        name: 'Amount',
        selector: 'amount',
        // cell: (row) => (
        //   <p
        //     title={row.amount}
        //     className="text-truncate text-underline text-bold-500 mb-0"
        //   >
        //     <u>{row.amount}</u>
        //   </p>
        // ),
      },
      {
        name: 'Type',
        selector: 'type',
        cell: (row) => (
          <p
            title={row.type}
            className={`${row.type==="CREDIT"?"text-danger":"text-success"} text-truncate text-capitalized text-bold-600 mb-0`}
          >
            <u>{row.type}</u>
          </p>
        ),
      },{
        name: 'Note',
        selector: 'note',
        // cell: (row) => (
        //   <p
        //     title={row.amount}
        //     className="text-truncate text-underline text-bold-500 mb-0"
        //   >
        //     <u>{row.amount}</u>
        //   </p>
        // ),
      },
   
      
      {
        name: 'Action',
        cell: (row) => (
          <Trash  color="#FC2B56" onClick={()=>{this.props.deleteTransaction(row.id)}} />
          // <ActionsComponent
          //   row={row}
          //   getData={this.props.getData}
          //   parsedFilter={this.props.parsedFilter}
          //   currentData={this.handleCurrentData}
          //   deleteRow={this.handleDelete}
          // />
        ),
      },
     
    ],
  };

  componentDidMount() {
    this.props.getTransactions();
    this.props.getUserInfo();
  }

  render() {
    let {
      columns,
      data,
      loading
    } = this.state;
    return (
      <div
        className="data-list m-4"
      >
        <h1>Hi! {this.props.user.name}</h1>
        <p>Your wallet balance is {this.props.userInfo}</p>
        <AddTransaction buttonLabel="Add" createTransactions={this.props.createTransactions} logout={this.props.logout}/>
       
       
        {loading?<p>...Loading</p>:<DataTable
          columns={columns}
          data={data}
          noPagination
          noHeader
          
        
          
          responsive
      
          
        />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions.transactions,
    user:state.auth.login.values.user,
    userInfo:state.transactions.userInfo,
    loading:false
  };
};

export default connect(mapStateToProps, {
  getTransactions,
  getUserInfo,
  deleteTransaction,
  createTransactions,
  logout
})(TransactionList);
