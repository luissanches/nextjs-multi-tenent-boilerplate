// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  setTimeout(()=>{
    res.status(200).json({ name: 'luis' })
  }, 3000)
}
