import React from 'react';

class Header extends React.Component {

    // ③inputで入力された情報をコンポーネントで保持する容れ物(state)を定義（stateの初期化）
    state = { keyword: '' };

    // ①inputの中身が変更された時にこの関数を実行するよという定義部分
    onInputChangeHandler = (event) => {
        // ④用意した容れ物に、取得したinputの要素をぶち込む
        this.setState({ keyword: event.target.value });

    }


    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <div>
                    <h2>Neko Tube</h2>
                </div>
                <div>
                    {/* ②inputの内容が変更されたときに発動＝onChange
                    発動する中身は、定義済みの関数 */}
                    <input onChange={this.onInputChangeHandler} value={this.state.keyword} />
                </div>
            </div>
        );
    }
}

export default Header;