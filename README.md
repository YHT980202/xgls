/defaultProps   如果父组件调用子组件的时候不给子组件传值，可以在子组件中使用defaultProps定义的默认值
Header.defaultProps={

    title:'标题'
}

//同行propTypes定义父组件给子组件传值的类型,需引入import PropTypes from 'prop-types';

Header.propTypes={

    num:PropTypes.number
}
