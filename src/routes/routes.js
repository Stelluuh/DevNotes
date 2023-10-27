const routes = (app) => {
    //Routes for NOTES model
    app.route('/note')
    .get((req,res) => {
       
        res.send('GET request successful')
    }
    )

    .post((req,res) => 
        res.send('POST request successful') 
    )

    app.route('/note/:noteId')
    .put((req,res)=>
        res.send('PUT request successful')
    )

    .delete((req,res) =>
        res.send('DELETE request successful')
    )
}

export default routes;