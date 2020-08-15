// HOC is a function that takes in a component and returns a component with new props
// takes in a component and adds in { x: 'foo', y: 'bar' } as props into the component

// export default withExtraProps(CountComponent)
// import CountComponent from './CountComponent'
// <CountComponentn hello={"world"} />
// { x: 'foo', y: 'bar', hello: 'world' }

//const withExtraProps = (WrappedComponent) => (props) => {
//	const extraProps = { x: 'foo', y: 'bar' }
//	return <WrappedComponent {...props} {...extraProps} />
//}

// Pure JS example

const myObj = {
	foo: 'bar',
	bar: 'foo'
}

const HOF = (myObject) => (props) => {
	const extraKeys = {x: 'y', y:'x'};
	return myObject = {...myObject, extraKeys, props};
}

const hello = (name) =>{
	return `hello ${name}`;
}

console.log(HOF(myObj)(hello('alexis'))) 
