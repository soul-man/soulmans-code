import { useState, useEffect, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MessageSquare } from "lucide-react"
import { useForm } from 'react-hook-form'
import { FaCheck } from "react-icons/fa6"
import emailjs from '@emailjs/browser'

interface FormErrors {
    name?: string
    email?: string
    subject?: string
    message?: string
}

interface FormData {
    name: string
    email: string
    subject: string
    message: string
}

export default function ContactDialog() {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm<FormData>() 

    const [disabled, setDisabled] = useState(false)
    const [alertInfo, setAlertInfo] = useState({
        display: false,
        message: '',
        type: '',
    })

    // Form validation states
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)
    const [formErrors, setFormErrors] = useState<FormErrors>({})

    const validateForm = useCallback(() => {
        const errors: FormErrors = {}

        if (!name) {
            errors.name = '(required)'
        } else if (name.length < 3) {
            errors.name = '(min. 3 characters)'
        }

        if (!email) {
            errors.email = '(required)'
        } else if (!email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
            errors.email = '(invalid)'
        }

        if (!subject) {
            errors.subject = '(required)'
        } else if (subject.length < 20) {
            errors.subject = '(min. 20 characters)'
        }

        if (!message) {
            errors.message = '(required)'
        } else if (message.length < 50) {
            errors.message = '(min. 50 characters)'
        }

        setFormErrors(errors)
        setIsFormValid(Object.keys(errors).length === 0)
    }, [name, email, subject, message])

    useEffect(() => {
        validateForm()
    }, [validateForm])

    const onSubmit = async (data: FormData) => {
        try {
            setDisabled(true)
            
            emailjs.init({
                publicKey: "2m1R3aLPeLal1BPdP",
            })

            await emailjs.send(
                'service_z74gm07',
                'template_yxej5g6',
                {
                    name: data.name,
                    email: data.email,
                    subject: data.subject,
                    message: data.message
                }
            )

            setAlertInfo({ 
                display: true, 
                message: 'Message sent successfully!', 
                type: 'success' 
            })

            setTimeout(() => {
                setAlertInfo({ display: false, message: '', type: '' })
            }, 5000)

        } catch (e) {
            console.error(e)
            setAlertInfo({ 
                display: true, 
                message: 'Failed to send message. Please try again.', 
                type: 'error' 
            })
        } finally {
            setDisabled(false)
            reset()
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="rounded-full mt-2 text-lg md:mr-10" variant="default" size="lg">
                    <MessageSquare className="w-6 h-6 mr-3 mt-1" />
                    Send a Message
                </Button>                        
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto bg-white border-4 border-blue-200 !rounded-[24px]">
                <DialogHeader>
                    <DialogTitle className="text-3xl font-bold text-black">Let&apos;s Connect</DialogTitle>
                </DialogHeader>
                <div className="mt-3">
                    <p className="text-black/70 text-lg mb-8">
                        Feel free to reach out for collaborations or just a friendly chat.
                    </p>
                    {alertInfo.display && (
                        <div className={`p-4 mb-4 rounded-xl ${alertInfo.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {alertInfo.message}
                        </div>
                    )}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label htmlFor="name" className="block text-sm font-medium text-black">
                                        Name
                                    </label>
                                    {formErrors.name ? (
                                        <span className="text-sm text-red-500">{formErrors.name}</span>
                                    ) : name && (
                                        <FaCheck className="text-green-500" />
                                    )}
                                </div>
                                <input 
                                    {...register('name')}
                                    id="name" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your name" 
                                    className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black placeholder:text-black-50"
                                />
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-black">
                                        Email
                                    </label>
                                    {formErrors.email ? (
                                        <span className="text-sm text-red-500">{formErrors.email}</span>
                                    ) : email && (
                                        <FaCheck className="text-green-500" />
                                    )}
                                </div>
                                <input 
                                    {...register('email')}
                                    id="email" 
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email" 
                                    className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black placeholder:text-black-50"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label htmlFor="subject" className="block text-sm font-medium text-black">
                                    Subject
                                </label>
                                {formErrors.subject ? (
                                    <span className="text-sm text-red-500">{formErrors.subject}</span>
                                ) : subject && (
                                    <FaCheck className="text-green-500" />
                                )}
                            </div>
                            <input 
                                {...register('subject')}
                                id="subject" 
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                placeholder="Subject of your message" 
                                className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black placeholder:text-black-50"
                            />
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label htmlFor="message" className="block text-sm font-medium text-black">
                                    Message
                                </label>
                                {formErrors.message ? (
                                    <span className="text-sm text-red-500">{formErrors.message}</span>
                                ) : message && (
                                    <FaCheck className="text-green-500" />
                                )}
                            </div>
                            <textarea 
                                {...register('message')}
                                id="message" 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Your message" 
                                rows={4} 
                                className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black placeholder:text-black-50 resize-none"
                            />
                        </div>
                        <Button 
                            type="submit" 
                            variant="default" 
                            size="lg"
                            disabled={!isFormValid || disabled}
                            className="rounded-full mt-2 text-lg md:mr-5 w-full h-12"                        >
                            Send Message
                        </Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
} 