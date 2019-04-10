module.exports = function (req, res, next) {
  res.locals.seo = {
    title: 'Porsche CRM',
    keywords: 'crm',
    description: 'expressapp'
  }

  next();
}