import React from 'react';
import { message } from 'antd';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import * as qiniu from 'qiniu-js'
import { Timestamp } from '../../utils/util.js';

export default class BraftEditorBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          editorState:BraftEditor.createEditorState(null)
        }
    }
    
  
   //回传监控Props状态
   componentWillReceiveProps(news,old){
    if(news.value){
       this.setState({
           editorState: BraftEditor.createEditorState(news.value)
       })
    }
  }

  render() {
      const { editorState } = this.state
      return (
          <div className="my-component">
              <BraftEditor
                  value={editorState}
                  onChange={this.handleEditorChange}
                  onSave={this.submitContent}
                  media={{ uploadQiniu: this.uploadQiniu }}
                  contentStyle={{height: this.props.height,border:'solid 1px #eee'}}
              />
          </div>
      )
  }

  //上传七牛
  uploadQiniu = (param) => {
    const key = param.file.name  // 上传后文件资源名以设置的 key 为主，如果 key 为 null 或者 undefined，则文件资源名会以 hash 值作为资源名。
    const observer = {
        next(res) {
            param.progress(res.total.percent)
        },
        error(err) {
          message.error("上传失败");
        },
        complete(res) {
            param.success({
                url: window.callbackQiniu + '/' + res.key
            })
        }
    }
    qiniu.upload(param.file, 'xqkj_'+Timestamp()+'.' + key.split('.')[1], this.props.token).subscribe(observer)
}
 
  // 编辑内容触发回调给父级
  handleEditorChange = (editorState) => {
    this.setState({ editorState })
    this.props.onChange(editorState.toHTML());
  }

}
