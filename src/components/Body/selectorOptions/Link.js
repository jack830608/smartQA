import React from 'react'


const Link = (props) => {
    const headerStyle = {
        color: '#8C96A0',
        fontSize: '12px',
        height: '37px',
        border: 'solid 1px #F0F0F0',
        width: '100%',
        padding: '13px 16px'
      }
      const textareaStyle = {
        width: '100%',
        minHeight: '120px',
        border: 'solid 1px #F0F0F0',
        maxHeight: '120px',
        padding: '16px',
        color: '#101010',
        fontSize: '12px'
      }
      const textCountStyle = {
        position: 'absolute',
        fontSize: '10px',
        bottom: '10px',
        right: '20px',
        color: '#CBCBCB'
      }
    return (
        <div style={{marginTop: "20px",width:'100%',display: "flex"}}>
        <div style={{position: "relative",width:'100%'}}>
            <div style={headerStyle}>
                <p>超連結訊息</p>
            </div>
            <div style={{display: 'flex',flexDirection:'column'}}>
                <input placeholder="請輸入網址連結 ex: www.abc.com" style={{height: '49px',fontSize:'12px',color:'#101010',border:'solid 1px #F0F0F0',borderTop: 'none',borderBottom: 'none',padding: '16px'}}></input>
                <input placeholder="在此輸入文字註解" style={{height: '64px',fontSize:'12px',color:'#101010',border:'solid 1px #F0F0F0',padding: '16px'}}></input>
            </div>
        </div>

        <div>
            <button
            className="cleanup_btn"
            style={{marginLeft: "15px",marginTop: "-1px"}}
            onClick={() => props.delOption(props.keyId)}>
            <i class="fas fa-trash-alt"></i>
            </button>
        </div>
      </div>
    )
}

export default Link