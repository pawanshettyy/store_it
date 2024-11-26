import React from 'react'

interface FileUploaderProps {
  ownerId: string;
  accountId: string;
}

const FileUploader: React.FC<FileUploaderProps> = ({ ownerId, accountId }) => {
  return (
    <div>
      FileUploader
      <p>Owner ID: {ownerId}</p>
      <p>Account ID: {accountId}</p>
    </div>
  )
}

export default FileUploader