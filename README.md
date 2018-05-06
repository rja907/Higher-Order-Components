# Higher Order Components in React

This repo is for myself. I doubt anyone would find any use of this. But any way...

A Higher order Component is a Component that adds some additional functionality to the already existing Component.

> According to reactjs.org:
A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.

Concretely, a higher-order component is a function that takes a component and returns a new component.

const EnhancedComponent = higherOrderComponent(WrappedComponent);

This app is used for access controls by showing a user who is signed in the resources page or rerouting a user who is not signed in to the home page.

We will now build a Higher Order functions so that we can set up the authentication in one place and then use it everywhere.
