import Socials from '../ui/socials'

const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 backdrop-blur-lg">
      <div className="mx-auto max-w-3xl p-4 sm:p-8">
        <div className="flex items-center justify-between">
          <Socials className="justify-center" />
          <div className="order-1">
            <p className="text-center text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Samay R. Shah
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
