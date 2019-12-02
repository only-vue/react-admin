/*
 * @Author: zhaohong 
 * @Date: 2019-07-23 12:12:38 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-09-18 15:03:57
 * table 使用说明
 * dataSource 数据源
 * columns 数据项
 * scroll 滚轮滚动项
 */


import React, { Component } from 'react';
import {Table, Pagination} from 'antd';

export default class Tables extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        
    }
    render(){
        return(
            <div>
                <Table
                    rowKey={record => record.id}
                    columns={this.props.columns}
                    dataSource={this.props.dataSource}
                    bordered={true}
                    className='formTable'
                    scroll={this.props.scroll?this.props.scroll:{}}
                    loading={false}
                    pagination={false}
                />
                <div>
                  <Pagination
								   	pageSizeOptions={['10', '20', '30', '40', '50']}
                    { ...this.props.pagination }
                   />
                </div>
               
            </div>
        )
    }
} 