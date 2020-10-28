$('body').scrollspy({ target: '#navPane' })

$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
  });